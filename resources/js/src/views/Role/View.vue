<template>
	<div>
		<vx-card title="Role Information">
			<template v-if="role">
				<b>ID: </b>  {{role.id}}
				<vs-divider/>
				<b>Name: </b> {{role.name}}
				<vs-divider/>
				<b>Permissions: </b>
                <br>
				<template v-for="permission in permissions">
                    <vs-chip>{{permission['display_name']}}</vs-chip>
				</template>
                <br>
                <vs-divider/>
                <b>Created At: </b> 18 OCT 2019
			</template>

			<template v-else>
				<vs-row>
					<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
						<b>Role Is Not Available!</b>
					</vs-col>
					<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
						<vs-button @click="$router.go(-1)" size="small" type="gradient" icon-pack="feather" icon="icon-arrow-left">Go Back</vs-button>
					</vs-col>
				</vs-row>
			</template>
    	</vx-card>
	</div>
</template>


<script>

export default {
	mounted() {
    	this.getRoleData();
  	},
  	data() {
	    return {
	      	role: null,
			permissions: null,
            created_at: '18 OCT 2019'
	    }
  	},
  	methods: {
  		//Display Role Data.
  		getRoleData()
  		{
            this.role = {
                id: 1,
                name: 'Super Admin'
            };
            this.permissions = [
                {
                    display_name: 'Browse Employee',
                },
                {
                    display_name: 'View Employee',
                },
                {
                    display_name: 'Create Employee',
                },
                {
                    display_name: 'Edit Employee',
                },
                {
                    display_name: 'Delete Employee',
                },
                {
                    display_name: 'Browse Patients',
                },
                {
                    display_name: 'View Patients',
                },
                {
                    display_name: 'Create Patients',
                },
                {
                    display_name: 'Edit Patients',
                },
                {
                    display_name: 'Delete Patients',
                },

            ];
  		},

        //Vuesax alert
        vs_alert (title, text, color, icon)
        {
            this.$vs.notify({
                title: title,
                text: text,
                color: color,
                iconPack: 'feather',
                icon: icon
            });
        }
  	}
}
</script>
