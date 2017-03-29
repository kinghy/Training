/**
 * Created by rjt on 17/3/29.
 */
import React, { Component } from 'react';
import './topbanner.css';
class TopBanner extends Component {
    render() {
        return (
            <header id="navigator" className="navbar navbar-fixed-top">
                <div className="navigation-view nav-inner row-flex">
                    <header class="nav-header">
                        <div class="workspace-name">
                            <a class="workspace-switcher-handler">
                                <span class="icon icon-menu"></span>
                            </a>
                            <a class="return-workspace-handler">
                                <span class="workspace-name-limit" title="个人项目"> 个人项目 </span>
                            </a>
                        </div>
                    </header>
                </div>
            </header>
        );
    }
}

export default TopBanner;
{/*<section class="nav-body">  <div class="nav-search"> <span class="icon icon-search nav-search-icon"></span> <input class="nav-search-input" type="search" placeholder="在个人项目中搜索"> </div> <div class="nav-create"> <a class="nav-create-handler" data-gta="{action: 'open global add menu', control: 'Global Add Button'}" data-toggle="dropdown"> <span class="icon icon-circle-plus"></span> </a> <div class="nav-create-menu dropdown-menu card "> <ul class="main-list">  <li class="create-project" data-gta="{action: 'add content', type: 'project' control: 'Global Add Menu'}"> <span class="icon icon-project"></span>项目 </li>  </ul>  <ul class="meta-list uponscore"> <li class="create-task" data-gta="{action: 'add content', type: 'task' control: 'Global Add Menu'}"> <span class="icon icon-board"></span>任务 </li> <li class="create-file" data-gta="{action: 'add content', type: 'file' control: 'Global Add Menu'}" data-gta-ignore="input"> <div class="create-file-replace"> <span class="icon icon-file"></span>文件 </div> </li> <li class="create-event" data-gta="{action: 'add content', type: 'event' control: 'Global Add Menu'}"> <span class="icon icon-calendar"></span>日程 </li> <li class="create-sharing" data-gta="{action: 'add content', type: 'post' control: 'Global Add Menu'}"> <span class="icon icon-wall"></span>分享 </li> </ul>  </div> </div> </section><footer class="nav-footer">  <a class="new-ribbon " data-gta="{action: 'new ribbon', control: 'Navigation Tab'}" href="https://blog.teambition.com/zh/updates" target="_blank">新功能</a> <div class="nav-footer-wrap user-footer-wrap"> <a class="nav-footer-handler" data-mark="my-avatar" data-toggle="dropdown" data-gta="{action: 'open avatar menu', control: 'Navigation Tab'}"> <span class="avatar img-circle personal-avatar" style="background-image:url(https://striker.teambition.net/thumbnail/110p1245fba3493df66687c0349f46859a09/w/100/h/100);">  </span> <span class="nav-badge" data-mark="international"></span> </a> <ul class="dropdown-menu card my-menu-list">  <li> <a href="https://account.teambition.com/my" target="_blank" data-gta="{action: 'enter account center', control: 'Avatar Menu'}">帐号设置</a> </li>  <li> <a class="my-settings-handler" data-gta="{action: 'enter my settings', control: 'Avatar Menu'}">偏好设置</a> </li>  <li class="uponscore"> <a class="url-handler" href="http://pay.teambition.com/plans" target="_blank" data-gta="{action: 'view plan option', control: 'upgrade', type: 'plus'}"> 升级 </a> </li>  <li class="uponscore line"></li>  <li> <a class="hotkey-handler" data-gta="{action: 'show hotkey list', control: 'Avatar Menu'}" data-label="hotkey helper">快捷键</a> </li>  <li> <a href="/apps" data-gta="{action: 'enter app download', control: 'Avatar Menu'}" target="_blank">下载应用</a> </li>  <li class="uponscore line"></li>   <li class="international-wrap"> <a href="https://us.teambition.com/projects"> 切换至国际服务器 <small>正在使用中国大陆服务器</small> </a> <span class="nav-badge" data-mark="international-link"></span> </li>  <li class="uponscore line"></li>  <li> <a class="logout-handler" data-gta="{action: 'log out', control: 'Avatar Menu'}">退出登录</a> </li> </ul> </div> <div class="nav-footer-wrap"> <a class="nav-footer-handler" data-gta="{action: 'open chat list', control: 'Navigation Tab'}" data-mark="chat"> <span class="icon icon-message"></span> <span class="nav-badge" data-mark="chat"></span> </a> </div> <div class="nav-footer-wrap"> <a class="nav-footer-handler inbox-handler" data-mark="inbox"> <span class="icon icon-inbox"></span> <span class="nav-badge" data-mark="message">15</span> </a> </div> <div class="nav-footer-wrap"> <a class="nav-footer-handler calendar-handler" data-mark="calendar"> 日历 </a> </div> <div class="nav-footer-wrap"> <a class="nav-footer-handler my-handler with-help" data-mark="my"> 我的 </a> </div>  <div class="nav-footer-wrap nav-question"> <a class="nav-footer-handler" data-mark="help" data-gta="{action: 'add feedback', control: 'Navigation Tab'}"> <span class="icon icon-circle-question"></span> </a> </div>  </footer>*/}