import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  USER_ROLES: any[] = [
    { key: 1, value: 'University', color: 'primary' },
    { key: 2, value: 'Restaurant', color: 'accent' },
    { key: 3, value: 'Individual', color: 'accent' },
    { key: 4, value: 'NGO', color: 'accent' },
    { key: 5, value: 'Recipient individual', color: 'primary' },
    { key: 6, value: 'Recipient organization', color: 'accent' }
  ];

  USER_STATUS: any[] = [
    { key: true, value: 'Active', color: 'primary' },
    { key: false, value: 'Inactive', color: 'warn' }
  ]

  FOOD_TYPES: any[] = [
    { key: 'Fruit and vegetables', value: 'Fruit and vegetables', color: 'primary' },
    { key: 'Starchy food', value: 'Starchy food', color: 'warn' },
    { key: 'Dairy', value: 'Dairy', color: 'warn' },
    { key: 'Protein', value: 'Protein', color: 'warn' },
    { key: 'Fat', value: 'Fat', color: 'warn' }
  ]

  COLORS: any[] = [
    { key: 1, value: 'primary' },
    { key: 2, value: 'accent' },
    { key: 3, value: 'warn' },
    { key: 4, value: 'foreground' },
  ];

}