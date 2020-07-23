#!/usr/bin/env bash

# default_svg_path='./components/Icons/svg'
default_icon_path='./components/Icons'

read -p "Svg name: (without extension) " svg_name
# read -p "Svg path [$default_svg_path]: " svg_path
# svg_path=${svg_path:-$default_svg_path}

read -p "Jsx icons path [$default_icon_path]: " icon_path
icon_path=${icon_path:-$default_icon_path}

default_css_type=$(echo "$svg_name" | tr '[:upper:]' '[:lower:]' | cut -d- -f1)

read -p "class suffix [$default_css_type]: " css_type
css_type=${css_type:-$default_css_type}

if [[ $svg_name == *"-large"* ]]; then
  default_icon_size=32
  else
  default_icon_size=18
fi

read -p "Icon size [$default_icon_size]: " icon_size
icon_size=${icon_size:-$default_icon_size}

file_to_write=$(cat bin/iconTemplate | sed 's,SVG_NAME,'"$svg_name"',g' | sed 's,SVG_IMPORT_NAME,'"${svg_name//-}"',g' | sed 's,CSS_TYPE,'"$css_type"',g' | sed 's,ICON_SIZE,'"$icon_size"',g')

touch "./$default_icon_path/$svg_name.jsx"
echo "$file_to_write" >> "./$default_icon_path/$svg_name.jsx"
