$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:4173/')
$listener.Start()
$root = (Get-Location).Path
while ($listener.IsListening) {
  $context = $listener.GetContext()
  $path = $context.Request.Url.AbsolutePath.TrimStart('/')
  if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
  $file = Join-Path $root $path
  if (Test-Path -LiteralPath $file -PathType Leaf) {
    $bytes = [IO.File]::ReadAllBytes($file)
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes,0,$bytes.Length)
  } else { $context.Response.StatusCode = 404 }
  $context.Response.Close()
}
