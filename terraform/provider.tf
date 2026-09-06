provider "aws" {
  region = var.aws-region
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "skippymart-tf-state"
    key    = "terraform.tfstate"
    region = var.aws-region
    encrypt = true
    use_lockfile = true
  }
}