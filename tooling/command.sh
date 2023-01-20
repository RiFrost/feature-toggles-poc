#!/usr/bin/env bash

type whiptail > /dev/null 2>&1 || brew install newt

export NEWT_COLORS='
window=,black
border=black,black
textbox=white,black
'

while true
do
    LINES=$(stty size | cut -d" " -f1)
    COLUMNS=$(stty size | cut -d" " -f2)
    choice=$(
        whiptail \
            --menu "Feature Toggles PoC" \
            --nocancel \
            $LINES $COLUMNS $(( $LINES - 8 )) \
            quit "Quit" \
            3>&1 1>&2 2>&3
    )

    case ${choice} in
        quit) tmux kill-session -t feature-toggles-poc;;
    esac
    sleep 1
done