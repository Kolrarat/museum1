Add-Type -AssemblyName System.IO.Compression.FileSystem
$docx = Get-ChildItem -Filter "*.docx" | Select-Object -First 1
Write-Host "Found file: $($docx.FullName)"
if (Test-Path "docx_temp") { Remove-Item -Recurse -Force "docx_temp" }
[System.IO.Compression.ZipFile]::ExtractToDirectory($docx.FullName, "docx_temp")
$xml = [xml](Get-Content "docx_temp\word\document.xml" -Encoding UTF8)
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
$paragraphs = $xml.SelectNodes("//w:p", $ns)
$lines = @()
foreach ($p in $paragraphs) {
    $tNodes = $p.SelectNodes(".//w:t", $ns)
    $text = ($tNodes | ForEach-Object { $_.InnerText }) -join ""
    if ($text.Trim().Length -gt 0) {
        $lines += $text
    }
}
$lines | Out-File -FilePath "extracted_content.txt" -Encoding UTF8
Write-Host "Extracted $($lines.Count) lines to extracted_content.txt"
