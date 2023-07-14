#!/usr/bin/env bash


set -a
source .github/.env
set +a


deno run            \
    --watch         \
    --allow-all     \
    --unstable      \
    Source/App.ts
