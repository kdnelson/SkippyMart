resource "aws_s3_bucket" "skippymart" {
  bucket = var.static-website
  tags = {
    Name        = var.static-website
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_website_configuration" "skippymart" {
  bucket = aws_s3_bucket.skippymart.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html" # Vite single-page apps (SPAs) route everything through index.html
  }
}

resource "aws_s3_bucket_public_access_block" "skippymart" {
  bucket = aws_s3_bucket.skippymart.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_read" {
  depends_on = [aws_s3_bucket_public_access_block.skippymart]
  bucket = aws_s3_bucket.skippymart.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.skippymart.arn}/*"
      }
    ]
  })
}