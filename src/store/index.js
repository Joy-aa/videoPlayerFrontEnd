import {createStore} from 'vuex'

const store = createStore({
    mutations:{
        loginIn(state){
            state.isAut=true
        },
        loginOut(state){
            state.isAut=false
            localStorage.removeItem("username")
            state.access=-1
            localStorage.removeItem("access")
            localStorage.removeItem("email")
        },
        getAut(state){
            // console.log("getAut", state.isAut)
            return state.isAut
        },
        modifyDatasetId(state,datasetId){
            state.datasetId=datasetId
        },
        setEmail(state,newEmail) {
            state.email = newEmail
            localStorage.setItem("email", newEmail)
        },
        setUsername(state,newUsername) {
            state.username = newUsername
            localStorage.setItem("username", newUsername)
        },
        getEmail(state){
            console.log("getEmail", state.email)
            return state.email
        },
        getUsername(state){
            console.log("getUsername", state.username)
            return state.username
        },
        setAccess(state, access){
            state.access = access
            console.log('setAccess', state.access)
            localStorage.setItem('access', access)
        },
        setVideosOfCategory(state, videos) {
            state.videos = videos
            console.log('setVideos', state.videos)
        },
        getVideoOfCategory(state) {
            return state.videos
        },
        setHeights(state, heights) {
            state.heights = heights
            console.log('setVideos', state.heights)
        },
        getHeights(state) {
            return state.heights
        },
        getImageList(state){
            return state.imageList
        },
        setTableData(state, Data) {
            state.tableData = Data
        },
        setHistoryRecords(state, records){
            state.HistoryRecords = records
        },
        modifyShowHistoryRecordName(state, recordName){
            state.showHistoryRecordName = recordName
        },
        modifyShowHistoryDatasetId(state, recordDatasetId){
            state.showHistoryDatasetId = recordDatasetId
        },
        modifyshowHistory3DModelPath(state, ModelPath){
            state.showHistory3DModelPath = ModelPath
        },
        // toggleIsCollapse(state){
        //     state.isCollapse = !state.isCollapse
        //     console.log('toggleIsCollapse', state.isCollapse)
        //     localStorage.setItem('isCollapse', state.isCollapse)
        // },
    },
    state(){
        return{
            isAut:false,
            username:'',
            email:'',
            datasetId:1,
            imageList:[],
            access: -1,
            HistoryRecords: [],
            showHistoryRecordName:'',
            showHistoryDatasetId:-1,
            showHistory3DModelPath: '',
            tableData:[],
            pictures:[],
            videos:[],
            heights:[]
            // isCollapse:true,
        }
    },
    actions:{
        // getAut({commit}){
        //     return this.isAut
        // }
    },

})

export default store