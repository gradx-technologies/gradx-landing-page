Add-Type -AssemblyName System.Drawing

$outputDirectory = [System.IO.Path]::GetFullPath(
  (Join-Path $PSScriptRoot '..\public\email')
)
[System.IO.Directory]::CreateDirectory($outputDirectory) | Out-Null

function New-IconCanvas {
  $bitmap = [System.Drawing.Bitmap]::new(
    128,
    128,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.Clear([System.Drawing.Color]::Transparent)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.ScaleTransform(4, 4)

  return @($bitmap, $graphics)
}

function New-GradientPen {
  $bounds = [System.Drawing.RectangleF]::new(3, 3, 26, 26)
  $brush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    $bounds,
    [System.Drawing.ColorTranslator]::FromHtml('#A78BFA'),
    [System.Drawing.ColorTranslator]::FromHtml('#6246D9'),
    45
  )
  $pen = [System.Drawing.Pen]::new($brush, 1.75)
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

  return @($pen, $brush)
}

function Save-Icon {
  param(
    [System.Drawing.Bitmap]$Canvas,
    [string]$Name
  )

  $icon = [System.Drawing.Bitmap]::new(
    32,
    32,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($icon)
  $graphics.Clear([System.Drawing.Color]::Transparent)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawImage($Canvas, [System.Drawing.Rectangle]::new(0, 0, 32, 32))

  $path = Join-Path $outputDirectory $Name
  $icon.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)

  $graphics.Dispose()
  $icon.Dispose()
}

function New-EmailLogo {
  $sourcePath = [System.IO.Path]::GetFullPath(
    (Join-Path $PSScriptRoot '..\public\favicon-192.png')
  )
  $source = [System.Drawing.Image]::FromFile($sourcePath)
  $logo = [System.Drawing.Bitmap]::new(
    108,
    108,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($logo)
  $graphics.Clear([System.Drawing.Color]::Transparent)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawImage($source, [System.Drawing.Rectangle]::new(0, 0, 108, 108))
  $logo.Save(
    (Join-Path $outputDirectory 'gradx-logo.png'),
    [System.Drawing.Imaging.ImageFormat]::Png
  )

  $graphics.Dispose()
  $logo.Dispose()
  $source.Dispose()
}

function New-PhoneIcon {
  $canvas, $graphics = New-IconCanvas
  $pen, $brush = New-GradientPen
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()

  $path.StartFigure()
  $path.AddBezier(8.2, 4.8, 6.6, 4.8, 5.4, 6.1, 5.4, 7.7)
  $path.AddBezier(5.4, 7.7, 5.4, 17.9, 13.6, 26.1, 23.8, 26.1)
  $path.AddBezier(23.8, 26.1, 25.4, 26.1, 26.6, 24.9, 26.6, 23.3)
  $path.AddLine(26.6, 20.8, 26.6, 20.8)
  $path.AddBezier(26.6, 20.8, 26.6, 19.5, 25.8, 18.6, 24.6, 18.3)
  $path.AddLine(21.0, 17.4, 21.0, 17.4)
  $path.AddBezier(21.0, 17.4, 20.0, 17.1, 19.0, 17.4, 18.3, 18.2)
  $path.AddLine(16.7, 19.8, 16.7, 19.8)
  $path.AddBezier(16.7, 19.8, 14.0, 18.5, 11.8, 16.3, 10.5, 13.6)
  $path.AddLine(12.1, 12.0, 12.1, 12.0)
  $path.AddBezier(12.1, 12.0, 12.9, 11.3, 13.2, 10.2, 12.9, 9.2)
  $path.AddLine(12.0, 6.4, 12.0, 6.4)
  $path.AddBezier(12.0, 6.4, 11.7, 5.4, 10.8, 4.8, 9.7, 4.8)
  $path.CloseFigure()

  $graphics.DrawPath($pen, $path)
  Save-Icon -Canvas $canvas -Name 'phone.png'

  $path.Dispose()
  $pen.Dispose()
  $brush.Dispose()
  $graphics.Dispose()
  $canvas.Dispose()
}

function New-MailIcon {
  $canvas, $graphics = New-IconCanvas
  $pen, $brush = New-GradientPen
  $outline = [System.Drawing.Drawing2D.GraphicsPath]::new()

  $outline.AddArc(4.5, 7.0, 5.0, 5.0, 180, 90)
  $outline.AddLine(7.0, 7.0, 25.0, 7.0)
  $outline.AddArc(22.5, 7.0, 5.0, 5.0, 270, 90)
  $outline.AddLine(27.5, 9.5, 27.5, 22.5)
  $outline.AddArc(22.5, 20.0, 5.0, 5.0, 0, 90)
  $outline.AddLine(25.0, 25.0, 7.0, 25.0)
  $outline.AddArc(4.5, 20.0, 5.0, 5.0, 90, 90)
  $outline.AddLine(4.5, 22.5, 4.5, 9.5)
  $outline.CloseFigure()

  $graphics.DrawPath($pen, $outline)
  $graphics.DrawLine($pen, 5.8, 8.5, 16.0, 17.0)
  $graphics.DrawLine($pen, 16.0, 17.0, 26.2, 8.5)
  Save-Icon -Canvas $canvas -Name 'mail.png'

  $outline.Dispose()
  $pen.Dispose()
  $brush.Dispose()
  $graphics.Dispose()
  $canvas.Dispose()
}

function New-GlobeIcon {
  $canvas, $graphics = New-IconCanvas
  $pen, $brush = New-GradientPen
  $longitude = [System.Drawing.Drawing2D.GraphicsPath]::new()

  $graphics.DrawEllipse($pen, 4.5, 4.5, 23.0, 23.0)
  $graphics.DrawLine($pen, 4.8, 16.0, 27.2, 16.0)

  $longitude.StartFigure()
  $longitude.AddBezier(16.0, 4.6, 10.2, 9.3, 10.2, 22.7, 16.0, 27.4)
  $longitude.AddBezier(16.0, 27.4, 21.8, 22.7, 21.8, 9.3, 16.0, 4.6)
  $graphics.DrawPath($pen, $longitude)
  Save-Icon -Canvas $canvas -Name 'globe.png'

  $longitude.Dispose()
  $pen.Dispose()
  $brush.Dispose()
  $graphics.Dispose()
  $canvas.Dispose()
}

New-PhoneIcon
New-MailIcon
New-GlobeIcon
New-EmailLogo

