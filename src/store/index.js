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
        setUserId(state, userId) {
            state.userId = userId
            localStorage.setItem("userId", userId)
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
            console.log('setVideosOfCategory', state.videos)
        },
        getVideosOfCategory(state) {
            return state.videos
        },
        setHeights(state, heights) {
            state.heights = heights
            console.log('setHeights', state.heights)
        },
        getHeights(state) {
            return state.heights
        },
        setRelatedUsers(state, relatedusers) {
            state.relatedusers = relatedusers
            console.log('setRelatedUsers', state.relatedusers)
        },
        getRelatedUsers(state) {
            return state.relatedusers
        },
        setRelatedVideos(state, relatedvideos) {
            state.relatedvideos = relatedvideos
            console.log('setRelatedVideos', state.relatedvideos)
        },
        getRelatedVideos(state) {
            return state.relatedvideos
        },
        getUsersOfCategory(state) {
            return state.users
        },
        setUsersOfCategory(state, users) {
            state.users = users
            console.log('setUsersOfCategory', state.users)
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
            userId:-1,
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
            heights:[],
            users:[],
            relatedusers:[],
            relatedvideos:[]
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