---
layout: post
title: Example PowerShell Script
subtitle: #
tags: [powershell, shell, script, automation]
comments: true
readtime: true
---
```
# Define the directory to monitor
$directory = "C:\path\to\directory"

# Set the threshold for disk usage in percentage
$threshold = 90

# Get the current disk usage percentage of the specified directory
$currentUsage = (Get-Item $directory).UsedSpace / (Get-Item $directory).TotalSize * 100

# Check if current usage is above the threshold
if ($currentUsage -gt $threshold) {
    # Prepare email subject
    $subject = "Disk Usage Alert"
    
    # Create email message with disk usage information
    $message = "Disk usage in $directory is above $threshold%. Current usage: $currentUsage%"
    
    # Specify the recipient's email address
    $email = "admin@example.com"
    
    # Send the email notification using Send-MailMessage cmdlet
    Send-MailMessage -From $email -To $email -Subject $subject -Body $message -SmtpServer "smtp.example.com"
}
```
