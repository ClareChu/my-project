<template>
    <div id="app1">
        <div class=“contentBox”>如何让你的节奏变的更快捷</div>
        <div class=“contentBox>新手入门</div>
            
    </div>
</template>
<script type="text/javascript">
import axios from 'axios';
	export default {
		data () {
			return {
				appId:1001786868768765800,
				name:'',
				value:'',//标识
				id:'',//修改的itemId
				selectedId:null,
				disabled:true,
		        repeatInfo:{},
		        rules: {},
		        secondPage:false
		    }
		},
		created () {
			let addType = this.$route.query.from
			let id = this.$route.query.id
			this.selectedId = this.$route.query.selectedId
			this.secondPage = this.selectedId ? true : false

			this.id = id ? id : ''
			if(this.id){
				this.getData()
			}
			this.getRule()
		},
		methods:{
			getRule () {
				var that = this
				this.rules = {
			        required: value => !!value || '请输入',
			        nameRule: value => value.length <= 20 || '最多能输入二十个字符',
			        typeRule: value => {
			          let pattern
			          if(that.secondPage){
			          	pattern = /^[\s\S]*.*[^\s][\s\S]*$/
			          }else{
			          	pattern = /^[0-9]*$/
			          }
			          return pattern.test(value) || '输入错误'
			        }
				}
			},
			goBack(){
				this.$router.back()
			},
			async getData () {
				let res = await this.$http('add/repeat/' + this.id, 'get', {})
				this.value = res.data.value
				this.name = res.data.name
				this.repeatInfo = res.data
			},
			submit () {
				let params
				if(this.id){
					params = {
						id:this.repeatInfo.id,
						app_id:this.repeatInfo.app_id,
						name:this.name,
						type:this.repeatInfo.type,
						value:this.value,
						created_by:this.repeatInfo.created_by,
						updated_by:(JSON.parse(sessionStorage.getItem('userInfo')))['id'],
						created_time:this.repeatInfo.created_time,
						updated_time: new Date().getTime(),
					}
					this.$http('add/fix', 'put', params).then(res => {//修改字典时
						if(res.code === 200){
							this.$router.back()
						}
					})
				}
				else if(!this.selectedId){//没有selectedid就是一级字典
					params = {
						app_id:this.appId,
						name:this.name,
						type:1,
						value:this.value,
						created_by:(JSON.parse(sessionStorage.getItem('userInfo')))['id'],
						updated_by:(JSON.parse(sessionStorage.getItem('userInfo')))['id'],
					}
					this.$http('add/addtype', 'post', params).then(res => {//修改字典时
						if(res.code === 200){
							this.$router.back()
						}
					})
				}
				else{
					params = {
						id:null,
						app_id:this.appId,
						name:this.name,
						type:Number(this.selectedId),
						value:this.value,
						created_by:(JSON.parse(sessionStorage.getItem('userInfo')))['id'],
						updated_by:(JSON.parse(sessionStorage.getItem('userInfo')))['id'],
						created_time:new Date().getTime(),
						updated_time:new Date().getTime(),
					}
					this.$http('add/subset', 'post', params).then(res => {//修改字典时
						if(res.code === 200){
							this.$router.back()
						}
					})
				}
			}
		},
		watch:{
			name (data) {
				this.disabled = data && this.value ? false : true
			},
			value (data) {
				this.disabled = data && this.name ? false : true
			}
		}
	}
</script>
<style>
    #app1 {
        text-align: left;
        height: 100px;
    }
    .contentBox {
        text-align: left;
        font-family: 'Courier New', Courier, monospace,
    }
</style>