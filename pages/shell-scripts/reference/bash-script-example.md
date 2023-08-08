---
layout: post
title: Example Bash Script
subtitle: #
tags: [bash, shell, script, automation]
comments: true
readtime: true
---
The following bash script monitors storage capacity usage of a directory and send an email notification when it's over a predefined threshold.

When this thoe of script is run by a cron job it can automate server metric monitoring.
```
#!/bin/bash

# Define the directory to monitor
directory="/path/to/directory"

# Set the threshold for disk usage in percentage
threshold=90

# Get the current disk usage percentage of the specified directory
current_usage=$(df -h "$directory" | awk 'NR==2 {print $5}' | tr -d '%')

# Check if current usage is above the threshold
if [ "$current_usage" -gt "$threshold" ]; then
    # If above threshold, prepare email subject
    subject="Disk Usage Alert"
    
    # Create email message with disk usage information
    message="Disk usage in $directory is above $threshold%. Current usage: $current_usage%"
    
    # Specify the recipient's email address
    email="admin@example.com"
    
    # Send the email notification using the 'mail' command
    echo "$message" | mail -s "$subject" "$email"
fi
```
