<template>
  <div>
    <vx-card title='Create New Role'>
      <form>
        <div class="vx-row">
          <div class="vx-col w-full mb-2">
            <vs-input class="w-full" :danger="errors.has('role_name')" :danger-text="errors.first('role_name')" val-icon-danger="clear" v-validate="'required'" icon-pack="feather" icon="icon-shield" icon-no-border label-placeholder="Role Name" v-model="role_name" name='role_name' />
          </div>
        </div>

        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <b>Role Permissions:</b>
            <ul v-for="(group, groupName) in permissions">
                <br>
                <vs-checkbox v-model="groupPermissions" :vs-value="groupName" @change="groupPressed(group)"><b>{{groupName}}</b></vs-checkbox>
              <li class="ml-8" v-for="(permission, index) in group" :key="index">
                <vs-checkbox v-model="rolePermissions" :vs-value="permission.name">{{permission['display_name']}}</vs-checkbox>
              </li>
            </ul>
          </div>
        </div>

          <vs-divider></vs-divider>
          <div class="vx-row">
              <div class="vx-col w-full">
                  <vs-button style="display: inline-flex" id="submit-btn" class="mr-3 mb-2" @click.prevent="is_loading?notifyToWait():submitForm()" icon-pack="feather" icon="icon-save">Submit</vs-button>
                  <vs-button style="display: inline-flex" v-if="!is_loading" color="warning" class="mb-2" icon-pack="feather" icon="icon-rotate-cw" @click.prevent="first_name = last_name = email = mobile = password = confirm_password = ''">Reset</vs-button>
              </div>
          </div>
      </form>
    </vx-card>
  </div>
</template>

<script>

  // For custom error message
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    role_name: {
      required: 'Please enter the role name'
    }
  }
};

// register custom messages
Validator.localize('en', dict);


export default {
  mounted() {
    this.getPermissions();
  },
  data() {
    return {
        permissions: [],
        role_name: "",
        rolePermissions: [],
        groupPermissions:[],

        is_loading: false
    }
  },
  methods: {
    //Get All Permissions
    getPermissions()
    {
        this.permissions = {
            Employees: [
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
            ],
            Patients: [
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
            ]
        };
    },

    //Create Role Submission
    submitForm()
    {

        this.$validator.validateAll().then(result => {
        if(result) {
            this.vs_alert ('Success', 'Role Successfully Added', 'success', 'icon-check');
        } else {
            console.log(this.errors);
            this.vs_alert ('Oops!', 'Please, solve all issues before submitting.', 'danger', 'icon-alert-circle');
            this.endBtnLoader("#submit-btn");
        }
      })
    },

      //Check and Un-Check by group
      groupPressed(group)
      {
          if (this.groupPermissions.includes(group[0].group)) {
            for(let i = 0; i< group.length; i++)
            {
                if (!this.rolePermissions.includes(group[i].name))
                    this.rolePermissions.push(group[i].name)
            }
          } else {
              for(let i = 0; i< group.length; i++)
              {
                  if (this.rolePermissions.includes(group[i].name))
                      this.rolePermissions.splice(this.rolePermissions.indexOf(group[i].name), 1);
              }
          }
      },

      //View Loader on button on submit
      startBtnLoader(buttonID)
      {
          this.is_loading = true;
          this.$vs.loading({
              background: 'primary',
              color: '#fff',
              container: buttonID,
              scale: 0.45
          });
      },

      //Hide Loader on button
      endBtnLoader(buttonID)
      {
          this.is_loading = false;
          this.$vs.loading.close(`${buttonID} > .con-vs-loading`);
      },

      //View a warning notification to wait for response
      notifyToWait()
      {
          this.vs_alert ('Please, wait!', 'Your request is under process', 'warning', 'icon-clock');
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

  },
}
</script>

<style>
  .centerx li {
    display: inline-flex;
    margin: 10px;
  }
</style>
