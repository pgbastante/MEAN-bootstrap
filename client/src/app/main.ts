import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import '../styles/styles.css';


platformBrowserDynamic().bootstrapModule(AppModule);
