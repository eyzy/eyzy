import React, { useState } from 'react'
import { Radio } from 'eyzy'

/* eslint-disable */

export default function RadioExamples() {
    const [value, setValue] = useState()

    return (
        <p key="-1">
          <Radio.Group
            options={[{ label: 'Абонемент' }, { label: 'Разовый урок' }, { label: 'Групповой урок' }]}
            onChange={setValue}
            value={value}
          />
        </p>
    )
}
