import React from 'react'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(frenchStrings)

function LastSeen({data}) {
    {console.log(data)}
    return (
        <>
            <TimeAgo date={data} formatter={formatter}  />
        </>
    )
}

export default LastSeen
