#!/bin/bash
cd /home/kavia/workspace/code-generation/weatherpulse-92991-92997/main_container_for_weatherpulse
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

