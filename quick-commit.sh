#!/bin/bash
if [ -n "$1" ]
then
  git commit -a -m "$1"
  echo "===================================="
  git status
  echo "===================================="
  else
    echo "Please input commit title"
fi
if [ -n "$2" ]
then
  git push origin $2
  echo "===================================="
  git status
  else
    echo "Please input branch name"
fi




