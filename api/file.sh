#!/bin/bash

output=$(find /home/mahimakothari/xv6/xv6-public -type f -exec file {} \; | grep ELF | grep executable | cut -d: -f1)
#echo $output


for var in "${output[@]}"
do
	a=${var}
	out=$(cp ${a} ./elf/)
	#echo "${a}"
# do something on $var
done
