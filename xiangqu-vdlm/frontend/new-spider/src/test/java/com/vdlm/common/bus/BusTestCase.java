package com.vdlm.common.bus;

import com.vdlm.common.bus.BusSignalManager;
import com.vdlm.common.bus.DefaultBusRegistry;


/**
 *
 * @auther chenxi
 */

public class BusTestCase {

	public static void main(String[] args) {
		final BusSignalManager bsm = new BusSignalManager(new DefaultBusRegistry());
		new Receiver(bsm); // just for init recevier
		final Sender sender = new Sender(bsm);

		final Thread t = new Thread() {

			@Override
			public void run() {
				try {
					for (int i = 0; i < 10; i++) {
						sender.send();
						sleep(1000);
					}
				} catch (final InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		};
		t.start();
	}

}
