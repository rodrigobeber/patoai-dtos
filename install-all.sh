#!/bin/bash
for project in 'patoai-assistant' 'patoai-openai' 'patoai-telegram' 'patoai-evolution' 'patoai-run' 'patoai-tool'; do
  cd ../$project
  yarn install
  cd -
done
