#!/bin/bash

##
## @brief     Helper function to show an error when a password is empty and exit
## param $1   Input name
##
empty_password_error() {
  error "The $1 environment variable is empty or not set. Set the environment variable ALLOW_EMPTY_PASSWORD=yes to allow the container to be started with blank passwords. This is recommended only for development."
  exit 1
}

##
## @brief     Helper function to show a warning when the ALLOW_EMPTY_PASSWORD flag is enabled
##
empty_password_enabled_warn() {
  warn "You set the environment variable ALLOW_EMPTY_PASSWORD=${ALLOW_EMPTY_PASSWORD}. For safety reasons, do not use this flag in a production environment."
}

# Validate passwords
if [[ "$ALLOW_EMPTY_PASSWORD" =~ ^(yes|Yes|YES)$ ]]; then
  empty_password_enabled_warn
else
  # Database creation by MySQL client
  if [[ -n "$MYSQL_CLIENT_CREATE_DATABASE_USER" && -z "$MYSQL_CLIENT_CREATE_DATABASE_PASSWORD" ]]; then
    empty_password_error MYSQL_CLIENT_CREATE_DATABASE_PASSWORD
  fi
  # Testlink database
  if [[ -z "$TESTLINK_DATABASE_PASSWORD" ]]; then
    empty_password_error TESTLINK_DATABASE_PASSWORD
  fi
fi
