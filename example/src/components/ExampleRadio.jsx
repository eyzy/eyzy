import React, { useState } from 'react'
import { Radio } from 'eyzy'

/* eslint-disable */

export default React.memo(function RadioExamples() {
    const [value, setValue] = useState()

    return (
        <div>
            <p>
              <Radio.Group
                options={[{ label: 'Абонемент' }, { label: 'Разовый урок' }, { label: 'Групповой урок' }]}
                onChange={setValue}
                value={value}
              />
            </p>
            <p className="scr" style={{width: '500px'}}>
            <Radio.Group
              name='loong'
              options={[
                { label: 'Абонемент', value: '1' }, 
                { label: 'Разовый урок', value: '2' }, 
                { label: 'Групповой урок', value: '3' }, 
                { label: 'Абонемент', value: '4' }, 
                { label: 'Разовый урок', value: '5' },
                { label: 'Групповой урок', value: '6' }, 
                { label: 'Абонемент', value: '7' }, 
                { label: 'Разовый урок', value: '8' }, 
                { label: 'Групповой урок', value: '9' }
              ]}
              onChange={setValue}
              value={value}
            />
          </p>
        </div>
    )
}
)