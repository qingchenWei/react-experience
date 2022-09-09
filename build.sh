#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
git pull origin main

cd ./src/mock
forever stop index.js
forever start index.js 


cd -