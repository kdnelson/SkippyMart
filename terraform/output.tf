output "static-website" {
  value       = aws_s3_bucket.skippymart.id
  description = "The exact S3 bucket created by Terraform"
}