import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
	selector: 'ga-resend-confirmation',
	template: `
		<nb-card class="center">
			<nb-card-header>
				<h6>Confirm</h6>
			</nb-card-header>
			<nb-card-body>
				<span>
					Are you sure you want to resend the invite to {{ email }} ?
				</span>
			</nb-card-body>
			<nb-card-footer>
				<button
					(click)="confirm()"
					class="mr-3"
					status="success"
					nbButton
				>
					OK
				</button>
				<button (click)="close()" status="danger" nbButton>
					Cancel
				</button>
			</nb-card-footer>
		</nb-card>
	`,
	styles: [
		`
			nb-card-body {
				text-align: center;
			}

			.center {
				align-items: center;
				width: 300px;
			}
		`
	]
})
export class ResendConfirmationComponent {
	email: string;
	constructor(
		protected dialogRef: NbDialogRef<ResendConfirmationComponent>
	) {}

	close() {
		this.dialogRef.close();
	}

	confirm() {
		this.dialogRef.close('ok');
	}
}