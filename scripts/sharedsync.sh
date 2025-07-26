#!/bin/bash

rm -rf ../emubench-agent/src/shared
cp -r src/shared ../emubench-agent/src/shared

rm -rf ../emubench-serv/src/shared
cp -r src/shared ../emubench-serv/src/shared
