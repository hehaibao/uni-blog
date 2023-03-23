<template>
	<div class="container">
		<div class="tools">
			<el-button @click="del" type="danger">删除选中</el-button>
			<el-button @click="showAddModal" type="primary">{{ `新增${props.title}` }}</el-button>
			<el-button @click="store[props.getApi]" :icon="SyncAlt" circle style="float: right;" />
		</div>
		<el-table :data="store[props.data]" @selection-change="handleSelectionChange" style="width: 100%">
			<el-table-column type="selection" width="55" />
			<el-table-column prop="name" :label="`${props.title}名称`" />
			<el-table-column prop="link" v-if="props.title=='友链'" label="链接地址" />
			<el-table-column label="前台展示" v-if="props.title=='友链'">
				<template #default="scope">
					<el-checkbox @change="editField(scope.row)" v-model="scope.row.isApproved" size="small" />
				</template>
			</el-table-column>
			<el-table-column prop="created_date" label="更新日期" :formatter="date" />
			<el-table-column label="操作" fixed="right" :width="80">
				<template #default="scope">
					<el-button @click="edit(scope.row)" circle :icon="Edit" size="small" type="warning"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 新增弹窗 -->
		<el-dialog v-model="showAdd" width="400px" :title="`编辑${props.title}`">
			<el-input v-model="name" :placeholder="`在这里输入${props.title}名称`"></el-input>
			<el-input style="margin-top: 20px;" v-if="props.title=='友链'" v-model="link" :placeholder="`在这里输入${props.title}链接`"></el-input>
			<template #footer>
				<el-button @click="showAdd = false">取消</el-button>
				<el-button type="primary" :disabled="!name" @click="submit">保存</el-button>
			</template>
		</el-dialog>
	</div>
</template>

<script setup>
import { useStore } from '@/stores/index.js'
import { ElMessageBox } from 'element-plus'
import { SyncAlt, Edit } from '@vicons/fa'
import { date } from '@/utils/formatter.js'

const store = useStore() // 标签和分类都是用store管理，方便窗体获取

const props = defineProps({
	title: String,
	data: String,
	getApi: String,
	addApi: String,
	delApi: String
})

const showAdd = ref(false) // 打开弹窗

const name = ref('')
const id = ref('')
const link = ref('')
let loading = false // 防止多次点击

const submit = () => {
	if (loading) {
		return
	}
	loading = true
	showAdd.value = false
	let data = {
		name: name.value,
		_id: id.value
	}
	if (link.value) {
		data.link = link.value
	}
	call(props.addApi, data)
		.then(res => {
			store[props.getApi]()
			name.value = ''
			id.value = ''
			link.value = ''
			toast.success('保存成功')
			loading = false
		})
		.catch(() => {
			loading = false
		})
}

// 获取选中，删除选中
let checkboxRecords = []
const handleSelectionChange = rows => {
	checkboxRecords = rows
}
const del = () => {
	let length = checkboxRecords.length
	if (length > 0) {
		let ids = checkboxRecords.map(i => {
			return i._id
		})
		ElMessageBox.confirm(`确定要删除这 ${length} 项吗？`, `彻底删除！！！`, {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'error'
		})
			.then(() => {
				if (loading) {
					return
				}
				loading = true
				call(props.delApi, { ids: ids })
					.then(res => {
						store[props.getApi]()
						toast.success('删除成功')
						loading = false
					})
					.catch(() => {
						loading = false
					})
			})
			.catch(() => {
				// 点击了取消
			})
	}
}

// 编辑
const edit = (row) => {
	showAdd.value = true
	name.value = row.name
	id.value = row._id
	link.value = row.link
}

// 显示弹出层
const showAddModal = () => {
	showAdd.value = true
	name.value = ''
	id.value = ''
	link.value = ''
}

// 修改checkbox勾选框，是否审核友链
const editField = (row) => {
	if (loading) {
		return
	}
	loading = true
	let data = {
		_id: row._id,
		name: row.name,
		link: row.link,
		isApproved: row.isApproved
	}
	call(props.addApi, data)
		.then(res => {
			toast.success('修改成功')
			loading = false
		}).catch(() => {
			loading = false
		})
}
</script>

<style lang="scss">
.tools {
	margin-bottom: 20px;
}
</style>
