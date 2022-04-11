import React from 'react'
import "./Admin.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminSidebar from '../../components/adminSidebar/AdminSidebar'
import BannerBooks from '../../components/fileCreator/bannerBooks/BannerBooks'
import IeltsBook from '../../components/fileCreator/IeltsBooks/IeltsBook'
import Speacking from "../../components/fileCreator/speackingBooks/SpeackingBooks"
import ReadingBooks from '../../components/fileCreator/readingBooks/ReadingBooks'

const Admin = () => {
  return (
    <div>
        <Router>
            <AdminSidebar/>
            <Switch>
                <Route path="/admin/booksBanner" component={BannerBooks}/>
                <Route path="/admin/BooksIelts" component={IeltsBook}/>
                <Route path="/admin/booksSpeaking" component={Speacking}/>
                <Route path="/admin/booksReading" component={ReadingBooks}/>
            </Switch>
        </Router>
    </div>
  )
}

export default Admin