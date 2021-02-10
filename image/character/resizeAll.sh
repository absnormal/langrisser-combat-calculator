#!/bin/zsh
# sudo apt-get install imagemagick
for i in *
do
    if test -f "$i"
    then
       `convert -resize 60X86 $i $i`
    fi
done

