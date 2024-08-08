# Use an ARM64-compatible base image
FROM php:7.4-fpm

# Install the required packages and dependencies
RUN apt-get update && apt-get install -y \
    libxml2-dev \
    libssl-dev \
    libzip-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install soap

# Set the working directory
WORKDIR /var/www/html

# Define the command to run when the container starts
CMD ["php-fpm"]