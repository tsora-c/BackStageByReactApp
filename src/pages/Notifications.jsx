import React from 'react';
import $ from 'jquery'
import 'bootstrap4-notify';

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notify: {
                icon: "",
                type: "success",
                vertial: "bottom",
                align: "left"
            }
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h4 className="page-title">Notifications</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">Bootstrap Notify</div>
                                <div className="card-category">Turn standard bootstrap alerts into "growl" like notifications from <a className="link" href="http://bootstrap-notify.remabledesigns.com/">Bootstrap Notify</a></div>
                            </div>
                            <div className="card-body">
                                <div className="form">
                                    <div className="form-group from-show-notify row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 text-right">
                                            <label>Placement :</label>
                                        </div>
                                        <div className="col-lg-4 col-md-9 col-sm-12">
                                            <select className="form-control input-fixed" defaultValue={this.state.notify.vertial} id="notify_placement_from" onChange={this.handleSelectChange.bind(this,"vertial")}>
                                                <option value="top">Top</option>
                                                <option value="bottom">Bottom</option>
                                            </select>
                                            <select className="form-control input-fixed" id="notify_placement_align" onChange={this.handleSelectChange.bind(this,"align")}>
                                                <option value="left">Left</option>
                                                <option value="right">Right</option>
                                                <option value="center">Center</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group from-show-notify row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 text-right">
                                            <label>State :</label>
                                        </div>
                                        <div className="col-lg-4 col-md-9 col-sm-12">
                                            <select className="form-control input-fixed" id="notify_state" onChange={this.handleSelectChange.bind(this,"type")}>
                                                <option value="primary">Primary</option>
                                                <option value="info">Info</option>
                                                <option value="success">Success</option>
                                                <option value="warning">Warning</option>
                                                <option value="danger">Danger</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group from-show-notify row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 text-right">
                                            <label>Style :</label>
                                        </div>
                                        <div className="col-lg-4 col-md-9 col-sm-12">
                                            <select className="form-control input-fixed" id="notify_style" onChange={this.handleSelectChange.bind(this,"icon")}>
                                                <option value="plain">Plain</option>
                                                <option value="withicon">With Icon</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="form">
                                    <div className="form-group from-show-notify row">
                                        <div className="col-lg-3 col-md-3 col-sm-12">

                                        </div>
                                        <div className="col-lg-4 col-md-9 col-sm-12">
                                            <button id="displayNotif" className="btn btn-success" onClick={this.alertNotify}>Display</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        $("[tag-role='Sidebar-Nav-Ul']>li").eq(4).addClass("active")
    }

    handleSelectChange=(key,event)=>{
        console.log(key,event);
        console.log(event.target.value);
        console.log(this.state.notify);
        var notify=this.state.notify;
        notify[key]=event.target.value;
        if(key==="icon"){
            if(event.target.value==="plain"){
                notify.icon="";
            }else if(event.target.value==="withicon"){
                notify.icon="la la-bell";

            }
        }
        this.setState({
            notify:notify
        })
    }

    alertNotify=()=>{
        console.log(this);
        $.notify({
            icon: this.state.notify.icon,
            title: 'Bootstrap notify',
            message: 'Turning standard Bootstrap alerts into "notify" like notifications',
        }, {
                type: this.state.notify.type,
                placement: {
                    from: this.state.notify.vertial,
                    align: this.state.notify.align
                },
                time: 1000,
            });
    }
}