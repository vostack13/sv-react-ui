#!/bin/bash
file_name=$1
file_location=./src/ui-lib/icons/${file_name}.tsx
if [ -e $1 ]; then
  echo "File $1.tsx already exists!"
else
  componnent_name=`echo $file_name | awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1'`
  echo $componnent_name
  cat > $file_location <<EOF
import { FC } from "react"
import { IconBase } from "./icon-base"
import { IconProps } from "./icon-base/types"

const ${componnent_name}: FC<IconProps> = (props) => {
  return <IconBase {...props}>
    <svg>
    </svg>
  </IconBase>
}

export { ${componnent_name} }
EOF
fi