import React from 'react'
import prices from '../../helpers/prices'
import { List, Radio, Typography } from 'antd'

const { Title } = Typography

function FilterByPrice ({hanldeFilters}) {

    const handleCheckRadio = e => hanldeFilters(e.target.value)

    return (
        <>
            <Title level={5}>按价格筛选</Title>
            <Radio.Group onChange={handleCheckRadio}>
                <List
                    dataSource={prices}
                    renderItem={item=>(
                        <List.Item>
                            <Radio value={item.array}>{item.name}</Radio>
                        </List.Item>
                    )}
                />
            </Radio.Group>
        </>
    )
}
export default FilterByPrice
