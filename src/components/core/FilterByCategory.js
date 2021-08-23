import React from 'react'
import { Checkbox, List, Typography } from 'antd'
import useGetCategories from '../../helpers/getCategories'
import Loading from '../../helpers/loading'

const { Title } = Typography

function FilterByCategory ({hanldeFilters}) {

    const categories = useGetCategories()
    
    const handleCheckFilter = values => hanldeFilters(values)
    
    return (
        <Loading>
            <Title level={5}>按分类查找</Title>
            <Checkbox.Group onChange={handleCheckFilter}>
                <List 
                    dataSource={categories}
                    renderItem={item=> (
                        <List.Item>
                            <Checkbox value={item._id}>{item.name}</Checkbox>
                        </List.Item>
                    )}
                />
            </Checkbox.Group>
        </Loading>
    )
}
export default FilterByCategory
