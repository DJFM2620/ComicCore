import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './pages/account/account.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HistoryComponent } from './components/history/history.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ConfigurationPrivacyComponent } from './components/configuration-privacy/configuration-privacy.component';


@NgModule({
  declarations: [
    AccountComponent,
    LogInComponent,
    RegisterComponent,
    MyAccountComponent,
    ProfileComponent,
    NotificationsComponent,
    HistoryComponent,
    FavoritesComponent,
    ConfigurationPrivacyComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AccountModule { }
