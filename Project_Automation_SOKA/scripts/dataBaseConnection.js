describe('SOKA Automation DB connection', function(){
        it('Count after creating Automation campaign', function(done) {	 
        var sqlQuery = 'select count(*) as count from campaign where account_id=1 and marketer_id=2';
        connection.query(sqlQuery, function(err, columns) {
            if (!err) {
            	expect(err).toBe(null);
            	var DbValue = columns[0].count;
            	console.log('\n'+""+sqlQuery+": "+DbValue);
                glob = DbValue - glob;
                console.log('\n'+" Created campaign_count is:"+glob);
                }
            else
            	{
            	console.log(err);
            	}
            done(err);
        });
    });
        it('Get MPC_id and the campaign id For the Automation campaign', function(done){
            var sqlQuery ='select mpc_id, id from campaign where mpc_id in(select max(mpc_id) from campaign) and marketer_id=2';
            connection.query(sqlQuery, function(err, columns){
            if (!err){
            	expect(columns).not.toBe(null);
            	var MPC_id = columns[0].mpc_id;
            	console.log("\n"+"Automatically created campaign MPC_id: "+MPC_id);
            	var CampaignId ="";
            	for (var count=0;count<glob;count++)
            	{
                CampaignId+=""+columns[count].id+",";
            	}
            	CampaignId = CampaignId.substring(0,CampaignId.length-1);
            	console.log(" Related campaign_id's are: "+CampaignId);
            }
            else{console.log(err);}
            done(err);
           	});
         });
    });