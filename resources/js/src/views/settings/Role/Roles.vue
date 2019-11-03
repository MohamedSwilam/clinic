<template>
	<div>
		<!-- Roles Table -->
        <vx-card title="Roles List">
			<vs-table search :data="roles">
                <template slot="header">
                    <vs-button size="small" to="/dashboard/settings/role/create" icon-pack="feather" icon="icon-plus" type="filled">Create Role</vs-button>
                </template>
		      	<template slot="thead">
			        <vs-th sort-key="id">ID</vs-th>
			        <vs-th sort-key="first_name">Role</vs-th>
			        <vs-th>Action</vs-th>
		      	</template>
		      	<template slot-scope="{data}">
			        <vs-tr :key="index" v-for="(role, index) in data">
			          	<vs-td :data="role.id">
			            	{{ role.id }}
			          	</vs-td>

			         	<vs-td :data="role.name">
			            	{{ role.name}}
			          	</vs-td>

			          	<vs-td>
			          		<vs-row>
			          			<div class="flex mb-4">
									  <div class="w-1/3">
											<vs-button :to="`/dashboard/settings/role/${role.id}`" radius color="primary" type="border" icon-pack="feather" icon="icon-eye"></vs-button>
									  </div>
									  <div class="w-1/3" style="margin: 0 10px;">
											<vs-button :to="`/dashboard/settings/role/edit/${role.id}`" radius color="warning" type="border" icon-pack="feather" icon="icon-edit"></vs-button>
									  </div>
									  <div class="w-1/3">
											<vs-button radius color="danger" type="border" icon-pack="feather" icon="icon-trash" @click="confirmDeleteRole(role)"></vs-button>
									  </div>
								</div>
							</vs-row>
			          	</vs-td>
			        </vs-tr>
		      	</template>
		    </vs-table>

    	</vx-card>
	</div>
</template>


<script>

export default {
	mounted() {
    	this.getData();
  	},
  	data() {
	    return {
	      	roles: [],
	      	roleIdToDelete: null,
	    }
  	},
  	methods: {
  		//Get A List Of All Roles.
  		getData()
  		{
			this.roles = [
			    {
			        id: 1,
                    name: 'Super Admin'
                },
                {
                    id: 2,
                    name: 'Admin'
                },
                {
                    id: 3,
                    name: 'Doctor'
                },
                {
                    id: 4,
                    name: 'Receptionist'
                }
            ];
  		},

  		// Confirm Dialog To Delete The Role
  		confirmDeleteRole(role)
  		{
  			this.roleIdToDelete = role.id;
  			this.$vs.dialog({
  				type: 'confirm',
		        color: 'danger',
		        title: `Are you sure!`,
		        text: 'This data can not be retrieved again.',
		        accept: this.deleteRole
	      	});
  		},

  		//Delete A Single Role By RoleID.
  		deleteRole()
  		{
            this.vs_alert ('Success', 'Role Successfully Deleted.', 'success');
  		},

		//Vuesax alert
		vs_alert (title, text, color)
		{
			this.$vs.notify({
				title: title,
				text: text,
				color: color
			});
		}
  	}
}
</script>
