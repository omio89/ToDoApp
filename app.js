new Vue({
    el: '#app',
    data:
    {
        msg:"",
        tasks:[]
    },
    methods:
    {
        remove:function(item)
        {
            var index = this.tasks.indexOf(item);
            var temp = [];
            for(let i=0;i<this.tasks.length;i++)
            {
                if(i!=index)
                {
                    temp.push(this.tasks[i]);
                }
            }
            this.tasks = temp;
        },
        add:function()
        {
            if(this.msg != "" && this.msg != " " && this.msg.length<=30 )
            {
                this.tasks.push(this.msg);
                this.msg ="";
            }
        },
        isEmpty:function()
        {
            return this.tasks.length == 0;
        },
        colorBind:function(i)
        {
            return i%2!=0;
        }
    }
});