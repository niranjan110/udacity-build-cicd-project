variable "k8s_version" {
  type        = string
  description = "EKS Kubernetes version"
  default     = "1.33"
}

variable "enable_private" {
  type        = bool
  description = "Enable private EKS endpoint and private VPC endpoints"
  default     = false
}

variable "public_az" {
  type        = string
  description = "Availability Zone letter for public subnet"
  default     = "a"
}

variable "private_az" {
  type        = string
  description = "Availability Zone letter for private subnet"
  default     = "b"
}