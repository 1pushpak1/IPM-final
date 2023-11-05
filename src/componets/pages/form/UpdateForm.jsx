import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import supabase from './Supabase'
import BlogFrom from './BlogForm';
import CalenderForm from './CalenderForm';
import NewsForm from './NewsForm';
import PatternForm from './PatternForm';

function UpdateForm() {
    const [value, setValue] = useState("Blog");
    const formChange = () => {
        const selectVal = document.getElementById("pageselect");
        setValue(selectVal["value"]);
    }
    return (
        <>
            <aside className="sidebar-area">
                <div className="widget widget_info">
                    <h3 className="widget_title mt-0">Page Details</h3>
                    <form className="mt-3">
                        <div className="form-group mb-2">
                            <select onChange={() => { formChange() }} id="pageselect" name="pages" className='form-control' placeholder='Select Page'>
                                <option value="Blog">Blog</option>
                                <option value="Calendar">Exam Calendar</option>
                                <option value="News">News & Events</option>
                                <option value="Pattern">Exam Pattern</option>
                            </select>
                        </div>
                    </form>
                    {(value == "Blog") ?
                        <BlogFrom />
                        : (value == "Calendar") ? <CalenderForm />
                            : (value == "News") ? <NewsForm />
                                : <PatternForm />
                    }
                </div>
            </aside>
        </>
    )
}

export default UpdateForm