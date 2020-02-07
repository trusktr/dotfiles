sudo /usr/share/vboot/bin/make_dev_ssd.sh --remove_rootfs_verification

# it fails, then looks at what --partitions option is says to use, and re-run the command, f.e.
#sudo /usr/share/vboot/bin/make_dev_ssd.sh --remove_rootfs_verification --partitions 4

#turns the verification check off. Because of step 2, the Chromebook will fail to boot if the verificaiton check is on.
sudo crossystem dev_boot_signed_only=0

#reboot

sudo mount -i -o remount,rw /
