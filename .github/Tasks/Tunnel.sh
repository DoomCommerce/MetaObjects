#!/usr/bin/env bash


set -a
source .github/.env
set +a


tunnel="${1:-$Tunnel_Name}"
region="${2:-$Tunnel_Region}"
port="${3:-Tunnel_Port}"

ngrok http              \
    --subdomain=$tunnel \
    --region=$region    \
    $port
