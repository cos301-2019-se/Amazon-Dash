#!/bin/bash

python3 -m backend --test > /dev/null 2>&1 &
PID=$!
cd frontend
npm run test:e2e:ci
STATUS=$?
kill $PID
exit $STATUS
