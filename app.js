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
        colorName:function(i)
        {
            if(i%5==0)
                return 'yellow';
            else if(i%5==1)
                return 'aqua';
            else if(i%5==2)
                return 'red';
            else if(i%5==3)
                return 'blue';
            else
                return 'green';
        }
    }
});
