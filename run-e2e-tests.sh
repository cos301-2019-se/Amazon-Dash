#!/bin/bash

python3 -m backend --test > /dev/null 2>&1 &
cd frontend
npm run test:e2e:ci
