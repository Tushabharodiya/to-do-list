import React, { useEffect, useState } from 'react'
import { addData, getData } from '../api/api'
import { ADD_LIST, GET_LIST } from '../constnt'

const List = () => {

    const [data, setdata] = useState([])
    const [list, setlist] = useState({})

    let getList = async () => {
        let res = await getData(GET_LIST)
        console.log(res);
        setdata(res.data.list)
    }

    useEffect(() => {
        getList()
    }, [])


    //add list

    let handle = (e) => {
        setlist({ ...list, [e.target.name]: e.target.value })
    }
    // console.log(list);

    let addList = async () => {
        let res = await addData(ADD_LIST, list)
        console.log(res);
        setdata([...data, res.data.list])
    }

    return (
        <div>



            <div className="list-data">
                <div className="container">
                    <div className="add_model d-flex justify-content-end mt-4">
                        <button className="button" data-bs-toggle="modal" data-bs-target="#model">add list</button>
                    </div>
                    <div className="modal fade" id="model">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <label>name: <input type="text" name='title' className='form-control' onChange={handle} /></label>
                                        <label>description : <input type="text" name='description' className='form-control' onChange={handle} /></label>
                                        <label>Date : <input type="date" name='date' className='form-control' onChange={handle} /></label>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="button" data-bs-dismiss="modal" onClick={addList} >add your work</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table border="1px" cellPadding="10px" className='mx-auto w-100 mt-5 text-center'>
                        <thead>
                            <tr>
                                <th>title</th>
                                <th>description</th>
                                <th>completed</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((val, ind) => {
                                    return (
                                        <React.Fragment key={ind}>
                                            <tr>
                                                <td>{val.title}</td>
                                                <td>{val.description}</td>
                                                <td><input type="checkbox" /></td>
                                                <td>{val.date}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default List
