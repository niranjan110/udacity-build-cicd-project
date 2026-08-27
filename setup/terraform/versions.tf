provider "aws" {
  region = "us-east-1"
  profile = "github-action-user"
}

terraform {
  required_version = ">=1.3.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0, < 6.0"
    }
  }
}